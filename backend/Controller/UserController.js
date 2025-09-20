const UserModel = require("../Model/UserModel");
const { getMediaList, TMDB_ENDPOINT } = require("../Services/tmdb");


async function getUser(req,res) {
    try {
        const userId = req.body.userId;

        const {name,email,wishList,isPremium} = await UserModel.findById(userId);

        res.status(200).json({
            user:{
                name:name,
                email:email,
                wishList:wishList,
                isPremium:isPremium
            },
            status:"success"
        });

    } catch (error) {
        res.status(400).json({
            message:"Internal Server Error",
            status:"failed"
        });
    }
}

async function addToWishList(req,res){
    try {
        const userId=req.body.userId;
        const {id,media_type}=req.body;

        const user = await UserModel.findById(userId);

        if(!user){
            return res.status(404).json({
                message:"No user found",
                status:"failed"
            })
        }
        let postItem;
        if (media_type == "tv" ){
            postItem = (await getMediaList( TMDB_ENDPOINT.fetchTvShowDetails(id))).data;   
        }else{
            postItem = (await getMediaList(TMDB_ENDPOINT.fetchMovieDetails(id))).data;
        }

        const wishListItem = {
            poster_path:postItem.poster_path,
            name:postItem.title,
            id:postItem.id,
            media_type:media_type
        }

        user.wishList.push(wishListItem);
        user.save();
        

        res.status(200).json({
            status:"success"
        })
    } catch (error) {
        res.status(400).json({
            message:"Internal Server Error",
            status:"failed"
        });
    }
}

async function getUserWishList(req,res) {
    try {
        const userId = req.userId;

        const {wishList}=await UserModel.findById(userId);
        
        if (wishList.length === 0) {
            return res.status(404).json({
                message:"No wishlist found",
                status:"failed"
            })
        }

        res.status(200).json({
            message:"User wishlist",
            status:"success",
            wishList:wishList
        })
    } catch (error) {
        console.log("Error in getUserList: ",error);
        res.status(400).json({
            message:"Internal Server Error",
            status:"failed"
        });
    }
}
module.exports={getUser,addToWishList,getUserWishList}