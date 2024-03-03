import React from 'react'

function MyChat({ activeInteraction, setActiveInteraction}) {

  const userMessages = [
    {
      imageUrl: "https://www.philadelphiaaward.org/wp-content/uploads/2020/03/sylvester-mobley-headshot-683x1024-1-683x720.jpg",
      username: "john_doe",
      fullName: "John Doe",
      recentMessage: "Let's catch up later then, good luck!",
      timing: "10:30",
      subject: "CS483",
      messages: [
        { text: "Hey there! How's it going?", sender: "john_doe", time: "09:15" },
        { text: "Pretty good, just getting started with my day. You?", sender: "user", time: "09:16" },
        { text: "Same here, got a lot on my plate today.", sender: "john_doe", time: "09:20" },
        { text: "Let's catch up later then, good luck!", sender: "user", time: "09:21" },
      ],
    },
    {
      imageUrl: "https://www.sramanamitra.com/wp-content/uploads/2021/12/david-moricca.jpeg",
      username: "jane_smith",
      fullName: "Jane Smith",
      recentMessage: "Sure, will do.",
      timing: "15:45",
      subject: "CS484",
      messages: [
        { text: "Did you get a chance to review the document I sent?", sender: "jane_smith", time: "14:30" },
        { text: "Yes, I did. It looks good, but I have some feedback.", sender: "user", time: "14:45" },
        { text: "Great, can you send the feedback by EOD?", sender: "jane_smith", time: "14:50" },
        { text: "Sure, will do.", sender: "user", time: "14:55" },
      ],
    },
    {
      imageUrl: "https://www.eu-startups.com/wp-content/uploads/2020/07/Deborah-Choi-by-Katja.jpg",
      username: "mike_brown",
      fullName: "Mike Brown",
      recentMessage: "That would be great. Let's schedule a prep call.",
      timing: "18:00",
      subject: "CS485",
      messages: [
        { text: "Looking forward to our meeting next week.", sender: "mike_brown", time: "17:00" },
        { text: "Yes, me too. Do you want to go over the agenda?", sender: "user", time: "17:05" },
        { text: "That would be great. Let's schedule a prep call.", sender: "mike_brown", time: "17:10" },
      ],
    },
    {
      imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-10/13/full/1697215941-871.jpg?im=FitAndFill=(826,465)",
      username: "sarah_connor",
      fullName: "Sarah Connor",
      recentMessage: "Absolutely, let's do that.",
      timing: "09:15",
      subject: "CS486",
      messages: [
        { text: "Can't believe it's already October!", sender: "sarah_connor", time: "08:30" },
        { text: "Time flies! Should we start planning for the year-end project?", sender: "user", time: "08:45" },
        { text: "Absolutely, let's do that.", sender: "sarah_connor", time: "08:50" },
      ],
    },
    {
      imageUrl: "https://www.alphajwc.com/wp-content/uploads/2022/09/startup-founder.jpg",
      username: "alex_reed",
      fullName: "Alex Reed",
      recentMessage: "No worries, catch you later then.",
      timing: "21:30",
      subject: "CS487",
      messages: [
        { text: "That was a great game last night!", sender: "alex_reed", time: "20:00" },
        { text: "Indeed, haven't enjoyed a game like that in ages. Busy now?", sender: "user", time: "20:05" },
        { text: "Bit tied up at the moment, unfortunately.", sender: "alex_reed", time: "20:10" },
        { text: "No worries, catch you later then.", sender: "user", time: "20:15" },
      ],
    },
    {
      imageUrl: "https://image.cnbcfm.com/api/v1/image/106517735-1588559064593gettyimages-996020588.jpeg?v=1588559119",
      username: "emma_jones",
      fullName: "Emma Jones",
      recentMessage: "Thanks, I'll send them over.",
      timing: "14:00",
      subject: "CS488",
      messages: [
        { text: "Do you need any help with the project?", sender: "emma_jones", time: "13:00" },
        { text: "Actually, yes. Could you look over these specs?", sender: "user", time: "13:05" },
        { text: "Sure thing, send them my way.", sender: "emma_jones", time: "13:10" },
        { text: "Thanks, I'll send them over.", sender: "user", time: "13:15" },
      ],
    },
    {
      imageUrl: "https://media.licdn.com/dms/image/D5612AQEM-bPiJf9vJw/article-cover_image-shrink_600_2000/0/1671489817471?e=2147483647&v=beta&t=hi7ik64UYFmgrdABwz9SY-WmwWFrxHzLMJPo1kmZZ_A",
      username: "david_clark",
      fullName: "David Clark",
      recentMessage: "Let's definitely catch up soon!",
      timing: "00:05",
      subject: "CS483",
      messages: [
        { text: "Happy Birthday! 🎉", sender: "david_clark", time: "00:05" },
        { text: "Thank you! Planning anything special this weekend?", sender: "user", time: "00:10" },
        { text: "Thinking about a small gathering. You should come!", sender: "david_clark", time: "00:15" },
        { text: "Would love to, thanks for the invite.", sender: "user", time: "00:20" },
        { text: "Let's definitely catch up soon!", sender: "david_clark", time: "00:25" },
      ],
    },
  ];
  
  const [totalMessages, setTotalMessages] = React.useState(userMessages);

  return (
    <div className='w-[20%] h-screen flex flex-col gap-8 px-6 py-10'>
      <p className='text-xl font-semibold text-[#4461F2]'>Messages</p>
      <div className='flex flex-col gap-2'>
        {totalMessages.map((message) => (
          <div onClick={() => setActiveInteraction(message)} key={message.username} className='flex items-center justify-between gap-2 hover:bg-gray-200 hover:cursor-pointer hover:rounded-md px-2 py-1'>
            <div className='flex items-center gap-4'>
            <img src={message.imageUrl} alt={message.username} className='w-10 h-10 rounded-full' />
            <div className='flex flex-col'>
              <p className='text-base font-semibold'>{message.username}</p>
              <p className='text-sm text-gray-500'>{message.recentMessage}</p>
            </div>
            </div>
            <p className='text-gray-500'>{message.timing}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default MyChat
