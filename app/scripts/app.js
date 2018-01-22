'use strict';

angular.module('portfolioApp',[])

   .controller('workexController', function () {
    var workex=[
        {
            jobtitle:'Junior Java Developer',
            company:'Great West Financial | Denver, Colorado',
            dates:'August 2017 - Present',
            respon:'Development',
            tech:'Java'},
        {
            jobtitle:'Software Developer Intern',
            company:'Plan-it Geo LLC | Arvada, Colorado ',
            dates:'June 2016 - September 2016',
            respon:'Development',
            tech:'Java Script'},
        {
            jobtitle:'Student Assistant II',
            company:'Office of Information Technology UC Denver | Denver, Colorado ',
            dates:'February 2015 - December 2016',
            respon:'Developmyent',
            tech:'Java Script'
        },
        {
            jobtitle:'Freelance Web Developer',
            company:'Self Employed | Pune, India ',
            dates:'April 2014 - December 2014',
            respon:'Development',
            tech:'Java Script'},
        {
            jobtitle:'Software Development Engineer',
            company:'Mechatronics Systems | Pune, India ',
            dates:'April 2012 - April 2014',
            respon:'Provide coding inputs as an individual contributor as well as a part of a team of 5 Engineers.Coding inputs for prototyping, production, and implementation of Windows system applications for structuring the data of water precipitation sensors/devices.Involved in end-to-end software development process, including client requirement gathering, analysis and system modeling, production, implementation, and release.Front-end web application development to visualize the data stored on the server. Using Joomla and WordPress CMS.Worked directly with clients for release and maintenance, and educating client members.Assisted with Linux administration and provided internal support for business units of IT Support and Quality Assurance.Deliver and Maintain code base.',
            tech:'Java (J2SE), Intermediate Java, C# (.NET WPF Framework), JavaScript(jQuery), PHP, HTML, CSS, Bootstrap. Visual Studio (2010,2012), Eclipse. MS SQL Server.'
        }
    ];

    this.workex = workex;
});