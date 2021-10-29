import StoryCard from "../storycard/StoryCard"

const stories = [
    { name: 'Experience Iq',
      src: "https://media-exp1.licdn.com/dms/image/C5603AQGWMnHFBvSNHQ/profile-displayphoto-shrink_200_200/0/1585517035347?e=1640822400&v=beta&t=0pAPShxwq2tNqK5WpzsA16P-1pPMh4OPRCT-ghN_mAU",
      profile : "https://media-exp1.licdn.com/dms/image/C5603AQGWMnHFBvSNHQ/profile-displayphoto-shrink_200_200/0/1585517035347?e=1640822400&v=beta&t=0pAPShxwq2tNqK5WpzsA16P-1pPMh4OPRCT-ghN_mAU"
   },
    { name: 'Elon Musk',
      src: "https://links.papareact.com/4zn",
      profile : "https://links.papareact.com/kxk"
   },
    { name: 'Jeff Bezoz',
      src: "https://links.papareact.com/k2j",
      profile : "https://links.papareact.com/fop"
   },
    { name: 'Mark Zuckerberg',
      src: "https://links.papareact.com/xql",
      profile : "https://links.papareact.com/snf"
   },
    { name: 'Bill Gates',
      src: "https://links.papareact.com/4u4",
      profile : "https://links.papareact.com/zvy"
   },
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map( story => (
                <StoryCard
                    key={story.src}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
            ))}
        </div>
    )
}

export default Stories
