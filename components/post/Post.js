
function Post({name , message, email , timestamp , image , postImage }) {
    return (
        <div className="flex flex-col">
            <div>
                 <div className="flex items-center space-x-2">
                        <img
                        src={image}
                        className="rounded-full"
                        width={40}
                        height={40}
                        alt="post"
                       />
                  <div>
                 <p className="font-medium">{name}</p>
                        <p className="text-x5 text-gray-400">
                           {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                  </div>
                 </div>
            </div>
        </div>
    )
}

export default Post
