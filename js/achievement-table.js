// (function () {
//     var dataHiring = [
//         {
//             c: '<b>TCS Codevita</b> <br> Round 1 <br> Round 2',
//             d: '<br>Aug 2018 <br>Dec 2018',
//             r: '<br>45/43000 <br>36th Rank'
//         },
//         {
//             c: '<b>Zomato Hackathon {Hackanoodle}</b> <br> Online contest',
//             d: '<br>Dec 2018',
//             r: '<br>37th Rank'
//         },
//         {
//             c: '<b>Interviewbit Hiring Challenge</b> <br> Online contest',
//             d: '<br>Dec 2018',
//             r: '<br>24th Rank'
//         },
//     ]

//     var dataOnline = [
//         {
//             c: '<b>Codechef</b> - April Long Challenge',
//             d: 'Apr 2018',
//             r: '155/7809'
//         },
//         {
//             c: '<b>Codechef</b> - January Cook Off',
//             d: 'Apr 2018',
//             r: '123/1738'
//         },
//         {
//             c: '<b>Codechef</b> - February Lunchtime',
//             d: 'Feb 2018',
//             r: '200/1922'
//         },
//         {
//             c: '<b>Hackerrank</b> - Hourrank 29',
//             d: 'Aug 2018',
//             r: '141/1906'
//         },
//     ]

//     var dataCollege = [
//         {
//             c: 'IOSD - Code-saga (Online coding contest)',
//             d: 'Apr 2018',
//             r: '1/67'
//         },
//         {
//             c: 'MSIT Avensis - AlgoJam (Coding competition)',
//             d: 'Jan 2018',
//             r: '1/193'
//         },
//         {
//             c: 'IEEE, MAIT - Codesense(Team Coding competition)',
//             d: 'Feb 2018',
//             r: '1/24'
//         },
//     ]

//     var tbody = document.getElementById('achv01').getElementsByTagName('tbody')
//     // console.log(tbody)
//     for (let i = 0; i < dataHiring.length; i++) {
//         $(tbody).append(`
//         <tr>
//         <td data-column="First Name">${dataHiring[i].c}</td>
//         <td data-column="Last Name">${dataHiring[i].r}</td>
//         <td data-column="Job Title">${dataHiring[i].d}</td>
//         </tr>
//     `)
//     }

//     var tbody = document.getElementById('achv02').getElementsByTagName('tbody')
//     // console.log(tbody)
//     for (let i = 0; i < dataOnline.length; i++) {
//         $(tbody).append(`
//         <tr>
//         <td data-column="First Name">${dataOnline[i].c}</td>
//         <td data-column="Last Name">${dataOnline[i].r}</td>
//         <td data-column="Job Title">${dataOnline[i].d}</td>
//         </tr>
//     `)
//     }

//     tbody = document.getElementById('achv03').getElementsByTagName('tbody')
//     // console.log(tbody)
//     for (let i = 0; i < dataCollege.length; i++) {
//         $(tbody).append(`
//         <tr>
//         <td data-column="First Name">${dataCollege[i].c}</td>
//         <td data-column="Last Name">${dataCollege[i].r}</td>
//         <td data-column="Job Title">${dataCollege[i].d}</td>
//         </tr>
//     `)
//     }

// })();

(function() {
  var data = [
    {
      event: "Kotlin Heroes",
      org: "Jetbrains",
      indRank: "8/700",
      glbRank: "225/4560",
      date: "Jun 2019",
      link:"https://codeforces.com/contest/1170"
    },
    {
      event: "TCS Codevita 8 Round 1",
      org: "TCS Global",
      indRank: "6th rank",
      glbRank: "---",
      date: "Aug 2019"
    },
    {
      event: "TCS Codevita VII Round 1",
      org: "TCS Global",
      indRank: "45/43000 ",
      glbRank: "---",
      date: "Aug 2018 "
    },
    {
      event: "Zomato Hackathon",
      org: "Zomato",
      indRank: "37",
      glbRank: "37",
      date: "Dec 2018 ",
      link: "https://www.interviewbit.com/contest/hackanoodle-coding-for-scale/"
    },
    {
      event: "TCS Codevita VII Round 2",
      org: "TCS Global",
      indRank: "17",
      glbRank: "36",
      date: "Dec 2018 "
    },
    {
      event: "Interviewbit Hiring Challenge",
      org: "Interviewbit",
      indRank: "24",
      glbRank: "24",
      date: "Dec 2018 "
    },
    {
      event: "April Long Challenge Div 1",
      org: "Codechef",
      indRank: "77",
      glbRank: "155/7809",
      date: "Apr 2018 ",
      link: "http://www.codechef.com/APRIL18A"
    },
    {
      event: "January Cook Off",
      org: "Codechef",
      indRank: "62",
      glbRank: "123/1738",
      date: "Apr 2018 ",
      link: "http://www.codechef.com/COOK90"
    },
    {
      event: "Hourrank 29",
      org: "Hackerrank",
      indRank: "45",
      glbRank: "141/1906",
      date: "Aug 2018 ",
      link: "https://www.hackerrank.com/contests/hourrank-29/challenges"
    },
    {
      event: "Code-saga (Online coding contest)",
      org: "IOSD",
      indRank: "1",
      glbRank: "1",
      date: "Apr 2018 "
    },
    {
      event: "AlgoJam (Coding competition)",
      org: "MSIT - Avensis",
      indRank: "1",
      glbRank: "1",
      date: "Jan 2018 "
    },
    {
      event: "Codesense(Team Coding competition)",
      org: "IEEE - MAIT",
      indRank: "1",
      glbRank: "1",
      date: "Feb 2018 "
    }
  ];

  var tbody = document
    .getElementById("achv-main-table")
    .getElementsByTagName("tbody");
  console.log(432, tbody);
  for (let i = 0; i < data.length; i++) {
    $(tbody).append(`
        <tr>
        ${
          data[i].link
            ? `<td class="td-link-row">${data[i].event}
                    <a href="${data[i].link}" target="_blank">
                        <img width="16" height="16" src="https://img.icons8.com/dotty/80/000000/external-link.png">
                    </a>
                </td>`
            : `<td>${data[i].event}</td>`
        }
        <td>${data[i].org}</td>
        <td>${data[i].indRank}</td>
        <td>${data[i].glbRank}</td>
        <td>${data[i].date}</td>
        </tr>
    `);
  }
})();
