import Image from "next/image";
function Post({name , message, email , timestamp , image , postImage }) {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
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

                 <p className="pt-4">{message}</p>
            </div>
            { postImage && (<div className="relative h-56 md:h-95 bg-white">
                <Image
                    src={postImage}
                    objectFit="cover"
                    layout="fixed"
                />
            </div>)}


            <div className="flex justify-between items-center">
                <div>
                    
                </div>

                <div>

                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Post
