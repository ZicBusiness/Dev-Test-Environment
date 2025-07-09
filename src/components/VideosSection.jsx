import React from 'react';

const VideosSection = () => {
  const facebookVideos = [
    {
      src: "https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1432959584784036%2F&show_text=false&width=560&t=0",
      width: "560",
      height: "315"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0G1JY7e2AdeuHzdm2jqE9fsHYXhfxe1MVxPZA82YqiH9Yo9RPwRQYXWjfWVZEDTSFl&show_text=true&width=500",
      width: "500",
      height: "715"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0DM6RF7wPNpZX7G9ZZ52TYnUweDCsDa22pckL9wSfQFNGEZQKQnXAX75HgkErkqPTl&show_text=true&width=500",
      width: "500",
      height: "645"
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fvideos%2F1685165908766995%2F&show_text=true&width=560&t=0",
      width: "560",
      height: "400"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0LyiuBmX3uCJZXTdhYrMgVEHVxu42dz2r5tXjdP6NyHZVhTzn2yeN9cNkv4j75PMtl&show_text=true&width=500",
      width: "500",
      height: "640"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0VRJiCiBXpfb5Zh2Pjx5qLq8R89UKmWKXgPishRXdLBemn4vrQV93mmbXDkgTsDgUl&show_text=true&width=500",
      width: "500",
      height: "640"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0nCMxuBv3qwp3RHZxBAzh9gfvPeUs2crXn45ASqsoxsokuDizbB6XoYFUUbikHsTjl&show_text=true&width=500",
      width: "500",
      height: "640"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02SfKR2CQiHZWmrqYtGtj5URdPt81RxA2QCnGaz6eikSPz6zaTB2r8gCoEjHpWPWMTl&show_text=true&width=500",
      width: "500",
      height: "690"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02EEdmoB6n1zYnFy8QLo3Z9S6zMKVnxAd5wFL8jbxQW2Gh6PCvBvvY1EqifyuTVYWjl&show_text=true&width=500",
      width: "500",
      height: "562"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid025apBov6NARdZqsXjWWR4MpjPxP5BqKNdjH6tRLvufcZ1L5KyoUW5yJz68Z2849MSl&show_text=true&width=500",
      width: "500",
      height: "480"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02RKLV37MZK9E21R5yvCdfJDDmEomv3UP5W2t1DjHnykFo4RH1kie64ADGT2zGjstwl&show_text=true&width=500",
      width: "500",
      height: "445"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02fysSysQRaATvmx6cjRzUz8J4HdruiGVncPBjy4vnFiWWX2CJbbAYjY1wzuWrjZ1Sl&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0svhZXahijxZE6tHJtRFdiGPRgcWv6PwCLYxJnCccEaHffNKw33EUeMX4EZQ5CU2vl&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02aKUYtSv7y18PReErmLmfaWM4PqjVQH4P8ndz846EkPcP66Nguq6sTDkATi7udaqjl&show_text=true&width=500",
      width: "500",
      height: "665"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02DygLT2Wpne9TY8hmTbHjAoDLLi2xw3nyrfTqZE1qvyTxZazkCuziegXoQme61h3ul&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0GLjmuMy3VCKbcmjyRFX8td1NqPQgjYcbgiz4QjgY1CnPMqVTdddMu9exezHeASrRl&show_text=true&width=500",
      width: "500",
      height: "665"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02nAWv7RxJLehga2FSZTG4yKrjfTDctXG5Ra7SnswYKRAtN5nKpkzStoH3JrmgFw8Rl&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02RBokHWTBNcThKW12HNq5jFs4jJn6NGESq5xVAdoWXinybRB2ydsULJre8wCGAfF4l&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02MX4j9Ub74uqcKaWRShSpwRHmMe6BMb9Mc3eMiS1gkDh2Vc5fS2PHRPK3aHW4TFJdl&show_text=true&width=500",
      width: "500",
      height: "423"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid029GesSMgFs3r4PYWrW419rceD6JndgiuUjaDtBKwAKvRnYGAmf7YynzHea7Z2N4jml&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02g2i8w92Zi61HGRFdebVrSQx4cp6AdeU1pjeYazdJBBjSNEdqA8dfLQ4qpvYDfDhql&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02vFntb4QmhmHqH2StPAFmiSwXJTqvmG9fr3HTe9krD6ttMjDWMaVSYR1gkfv8cTUZl&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0oQ3sKQCqrKwHLthEuehVTCi7h2QUDyY2Edcxdf6RZnYHzVbLvU4FAi8EvkjMQwril&show_text=true&width=500",
      width: "500",
      height: "444"
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fvideos%2F1350263185847110%2F&show_text=false&width=304&t=0",
      width: "304",
      height: "476"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid02HK6BPx9gw2bBw3mFz2DPndARbv9kYiTmcHqmD2FSs8SQH6yz1jR5Tu1LaLP5SZxCl&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid07n3vLs596iDxcAw5z8gBmRKUtv3Kg5SygDUojSCSMBxUSMc1wbd5DjNYAKQsrg4vl&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fvideos%2F660000552238863%2F&show_text=false&width=560&t=0",
      width: "560",
      height: "322"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0J2bELBrD9KgrEQnCdZb4znnfQhWj9SRm6uUp2bCQGrtS2GBauecEEM7w7W1YSVDnl&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid07gUspXadkggj1kXsJACUbd5NXaSWHZP3meAPetE5fjXJFFba8RPTcz5A3qC17iFdl&show_text=true&width=500",
      width: "500",
      height: "590"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid08JQpmCtVBmsCrDrTTQWJ8SDWeFQvK9uubuMpmSpzTe4sa8fW7QV8cntJnZGsHc4kl&show_text=true&width=500",
      width: "500",
      height: "250"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FHarmonique2017%2Fposts%2Fpfbid0TUw9xYjWeYdaTf32kq94RGyqy91maGYH7Mw2X4eU2JYjmt2FapUZ7tgG1NKymeFol&show_text=true&width=500",
      width: "500",
      height: "250"
    }
  ];

  return (
    <section className="videos">
      {facebookVideos.map((video, index) => (
        <iframe 
          key={index}
          className="iframe-facebook" 
          src={video.src}
          width={video.width}
          height={video.height}
          style={{border: 'none', overflow: 'hidden'}}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      ))}
    </section>
  );
};

export default VideosSection;

