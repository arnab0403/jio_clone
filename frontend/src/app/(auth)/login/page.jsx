"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { api, ENDPOINT } from '@/lib/endpoint'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { userLoggedInDetails } from '@/redux/userSlice'
import { useRouter } from 'next/navigation'

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const dispatch=useDispatch();
    const router=useRouter();

    const handleSubmit=async()=>{
        if (!email || !password) {
            return toast.warning("All fileds are required");
        }

        try {
            const response = await api.post(ENDPOINT.login,{email,password});
            if (response.data.status === "success") {
                dispatch(userLoggedInDetails(response.data.user));
                router.push("/");
                return toast.success("Sign in Successfully..");   
            }
        } catch (error) {
            // Axios throws here if status != 200
            if (error.response) {
            return toast.warning(error.response.data.message || "Email Not Found..!");
            } else {
            return toast.error("Something went wrong. Please try again later.");
            }
        }
    }
  return (
    <div className='h-[100vh] flex justify-center items-center'>
            <Card className="w-full max-w-sm bg-[#1c1917]  border border-[#313131] text-white rounded-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login </CardTitle>
                <CardDescription className="text-[#999999]">
                Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <div className="flex flex-col gap-4">
                        <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                        />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full bg-[#e11d48] hover:bg-[#cb143c] cursor-pointer" onClick={handleSubmit}>
                    Sign In
                </Button>
            <div className='w-full flex flex-row justify-between text-sm pt-6'>
                <div>
                    <Link href="/resetpassword">
                        Forget Password?
                    </Link>
                </div>
                <div className='flex gap-1'>
                    <p>Need an account? </p>
                     <Link href="/signup" className=' underline'>
                        Sign Up
                    </Link>
                </div>
            </div>
            </CardFooter>
           
            </Card>
        </div>
  )
}

export default Login