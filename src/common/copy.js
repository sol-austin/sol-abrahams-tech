const copy = {
  work_experience: {
    cards: [
      {
        title: 'Rookie Cooks',
        dates: 'March 2020 - Present [paid work]',
        link: 'https://www.rookiecooks.com',
        list: {
          list_title: 'A wide ranging technical support role including:',
          list_items: [
            'web development and supporting digital advertising campaigns;',
            'advising on and managing a transfer of booking systems in order to support the growing online business, leading to savings of at least 2% per transaction;',
            'developing a custom WordPress plugin utilising the Bookwhen API to display classes on our site in a suitable format;',
            'assisting with running a successful Google Ads campaign which saw a significant rise in booking numbers;',
            'learning important data analytics skills using Google Analytics and extracted a number of useful insights which were acted upon and proved valid.'
          ]
        },
        description: 'I had a wide ranging role including offering technical support, web development and supporting digital advertising campaigns. I advised on and managed a transfer of booking systems in order to support the growing online business, leading to savings of at least 2% per transaction. I developed a custom WordPress plugin utilising the Bookwhen API to display classes on our site in a suitable format. I assisted with running a successful Google Ads campaign which saw a significant rise in booking numbers. I learnt important data analytics skills using Google Analytics and extracted a number of useful insights which were acted upon and proved valid.',
        logos: ['rookiecooks.png']
      },
      {
        title: 'Forensic Architecture',
        dates: 'July 2020 - Present [unpaid internship]',
        link: 'https://forensic-architecture.org/',
        list: {
          list_title: 'An open source development role including:',
          list_items: [
            'learning to use GitHub for collective development;',
            'contributing towards a web app used by FA in many of their investigations;',
            'cleaning up code and using pull requests to merge changes;',
            'adding a search bar feature to the web app;',
            'being mentored weekly by one of FA’s open source developers.'
          ]
        },
        description: 'This is a default description',
        logos: ['forensicarchitecture.png'],
        extra_info: 'You can find my Forensic Architecture contributions on my '
      },
      {
        title: 'Catherine Powell',
        dates: 'July 2020 - Present [paid work]',
        link: 'https://cpcoghyp.com/',
        list: {
          list_title: 'A web development role including:',
          list_items: [
            'developing a Wordpress website from scratch alongside building on an existing booking solution;',
            'custom writing most of the site according to the client\'s design specification;',
            'digging into Wordpress theme files and selectively overriding specific ones with my own child theme;',
            'adapting custom parts of the theme to be responsive and attractive on mobile devices and tablets;',
            'advising the customer and a wider cohort of therapists on the optimal booking system for the client\'s requirements and tweaking it further to ensure it was successful;',
            'integrated Stripe with the booking system and added a function ensuring payments were linked to the customer and appointment booked, utilising the Stripe API.'
          ]
        },
        description: 'I developed a Wordpress website from scratch alongside building on an existing booking solution. Whilst the website itself was built on Wordpress to allow easy content management after the initial build by non technical users, I custom wrote most of the site according to the client\'s design specification. This involved digging into Wordpress theme files and selectively overriding specific ones. I also had to adapt custom parts of the theme to be responsive and attractive on mobile devices and tablets. I advised on the optimal booking system for the client\'s requirements and tweaked it further to ensure it was successful. I integrated Stripe with the booking system and added a function ensuring payments were linked to the customer and appointment booked, utilising the Stripe API.',
        logos: ['catherinepowell.png']
      },
      {
        title: 'Children\'s Air Ambulance',
        dates: 'September 2018 - July 2019 [voluntary work]',
        link: 'https://theairambulanceservice.org.uk/childrens-air-ambulance/',
        list: {
          list_title: 'A customer facing retail role including:',
          list_items: [
            'serving customers on the till;',
            'managing stock and sorting donations;',
            'assisting customers on the shop floor;',
            'restocking shelves and clothing lines;',
            'helping research products to choose an appropriate price.'
          ]
        },
        description: 'This is a default description',
        logos: ['childrenairambulance.jpg']
      }
    ]
  },
  education: {
    cards: [
      {
        title: 'The Latymer School',
        link: 'https://www.latymer.co.uk',
        dates: '2015-present',
        description: 'I completed my GCSEs at Latymer with top grades, and am currently studying A-Levels in the sixth form. I\'ve been engaged in the school\'s wider community and was awarded Spirit of Latymer in Year 10.',
        alevels: ['Chemistry', 'Further Maths', 'Maths', 'Physics'],
        gcses: {
          Biology: 9,
          Chemistry: 9,
          'Design & Technology': 9,
          'English Language': 9,
          'English Literature': 8,
          Geography: 9,
          German: 7,
          History: 9,
          Maths: 9,
          Physics: 9
        },
        logos: ['thelatymerschool.gif']
      },
      {
        title: 'European Super League - Guardian Article',
        link: 'https://www.theguardian.com/football/2021/apr/19/revealed-unpublished-super-league-document-justifying-breakaway',
        dates: 'April 2021',
        description: 'Following the rushed launch of the European Super League, I explored their website for hidden information. I stopped short of using any scanning tools and manually scoured the site for clues. I uncovered an unpublished \'intro video\' and document justifying the breakaway. It formed the basis of a \'nuclear\' news story by the Guardian and I was personally credited and thanked by senior figures from the paper.',
        logos: ['guardian.png', 'thesuperleague.png']
      },
      {
        title: 'CyberStart Elite 2020 Participant',
        link: 'https://www.sans.org/course/network-penetration-testing-ethical-hacking',
        dates: 'July - Aug 2020',
        description: 'From the initial cohort of over 35k students, I was one of the top 200 who qualified for the final stage, CyberStart Elite. As this was my first year, I completed a course based on SANS SEC560: Ethical Hacking Fundamentals. I learnt key pentesting skills, ranging from planning and scoping to exploitation and attacks. I also spent a full day completing CTF challenges simulating a real pentest on a business.',
        logos: ['sans.jpg', 'cyberdiscovery.png']
      },
      {
        title: 'DataCamp - Data Scientist with Python - Career Track',
        link: 'https://www.datacamp.com/',
        dates: 'Jun 2020',
        description: 'During lockdown, I completed the Data Scientist with Python career track. This helped me gain a deeper understanding of data science and machine learning. I completed practical exercises with basic classifiers and regressors before moving into more advanced unsupervised learning techniques such as neural networks. I intend to complete the fastAI course to further my knowledge.',
        logos: ['datacamp.png']
      },
      {
        title: 'CyberStart Essentials - Distinction',
        link: 'https://joincyberdiscovery.com/',
        dates: 'May 2020',
        description: 'CyberStart Essentials complemented CyberStart Game, the two mains parts of the CyberDiscovery program. Whilst Game is practical challenges, Essentials focuses on teaching the theory through a series of videos and articles. There is a mini-quiz and exam at the end of each section, building up to a final 1 hour 30 mins exam in which I scored 88% and achieved a distinction.',
        logos: ['cyberdiscovery.png']
      },
      {
        title: 'Cyber Discovery (CyberStart)',
        link: 'https://joincyberdiscovery.com/',
        dates: 'Sep 2019 - May 2020',
        description: 'After qualifying for the main stage of the CyberDiscovery program, I participated in interactive challenges throughout the year. With an aim to qualify for Elite in my first year and my GCSE year, I learnt to balance commitments. I completed 97% of challenges, including web exploitation, binary exploitation, forensic recovery, python scripting and cryptography.',
        logos: ['cyberdiscovery.png']
      },
      {
        title: 'Duke of Edinburgh (Bronze)',
        link: 'https://www.dofe.org/',
        dates: 'Sep 2019',
        description: 'Throughout the year, I completed my volunteering activity at the Children\'s Air Ambulance charity shop, working on the tills, teaching me valuable life skills. I also learnt photography which I continue to enjoy in my free time, using a DSLR camera and Lightroom to edit my photos. I rounded off DofE with a 2 day camping trip, developing important teamwork and communication skills.',
        logos: ['dofe.jpg']
      },
      {
        title: 'Delancey Schools Chess Challenge GigaFinal',
        link: 'https://www.delanceyukschoolschesschallenge.com/',
        dates: 'July 2015',
        description: 'In Year 6, I was selected from my school\'s chess club to compete in a national tournament. It began with a regional \'Megafinal\' in which I was the only student from my school to pass. I gained valuable experience at the \'Gigafinal\', where I was tutored by an professional chess player.',
        logos: ['delancey.png']
      }
    ]
  }
}

export default copy
