# Web Portfolio Project
---
As a developer, I wondered what could be a great project that I could do using the program;ming skills of HTML, CSS, and JavaScript. I had many ideas after researching through the internet such as a TODO app, website planner, and more. However, I realized that there couldn't be a better project as my first web project instead of my personal portfolio. 

My Web Portfolio is my personal web developed portfolio created using JavaScript library React. 

## Project Description and Features
My web portfolio is a showcase of my **background** and **career** as a software engineer. In a **SPA** (Single Page Application) format, it is comprised in sections/components of the portfolio. The sections that the portfolio includes: **Navigation Bar, Landing Section, Education and Background Section, Projects and Workspace Section,** and **Contact Me Section**. 

### Header Navigation Bar and Landing Section
---

This is the first section of my web portfolio. It is divided into two different blocks of components which is the **Header(Navigation) Bar** and the **Landing Section**. In the Navigation bar, three icons of *Mail*, *Github*, and *LinkedIn* is displayed on the left, and three section navigators of *Education & Background*, *Projects*, and *Contact Me* is displayed on the right.

The three icons organized on the left functions as direct hyperlinks. Clicking on the *mail icon* directly opens a mail pop-up that enables the user to send an email to me. The *github icon* and *linked-in* icon hyperlinks to my github and linked in. 

The **landing section** displays my bio with a clean blue background which the users will see at first when the portfolio is opened.


![스크린샷 2023-09-16 오후 8 55 43](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/84c3788d-5f6f-4ce3-9969-6e66fc800e38)

## Education and Background Section

The **Education and Background section** is divided into two separate sections of *Education* and *Profile*. On the left, the *education* section consists of buttons that hyperlinks my elementary-middle school, high school, and my current university. On the other side, the *profile* section informs my personal information such as age, nationality, hobby, address, and etc with the use of **hooks and state management**. When the blue buttons in the profile section is clicked, each categorized button displays my corresponding information. 

![스크린샷 2023-09-18 오전 2 12 53](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/2c02aaed-221d-4187-809e-44f2daa34ef9)

## Project and Workspace Section

The **Project and Workspace section** is comprised of two separate sections of *Workspace* and *Projects*. The first half of the section is *Featured Projects* which reveals development projects that I have finished or planned to be started. The status of the project is indicated below the project title. Then a brief description of the projects are explained below. Lastly, there is a button that hyper-links the users to the corresponding project's workspace for more information. 

![스크린샷 2023-09-18 오전 2 22 57](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/891f3fba-e30c-44fe-a4cf-31d84ff4daf7)

The second half of the section is *My Workspace* which displays my workspaces: *My Notion* and *My Github*. Clicking on the *See more* button below for workspaces directs the users to my notion page which contains my studies for programming, or my github page whhere it contains all my projects' source files and information. 
![스크린샷 2023-09-18 오전 2 15 35](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/23bc85d9-5dec-43e8-97c4-e75f56205267)

If the project's status is *To be started*, the *See more* button pops an alert message with an explanation that the projects are being prepared to be developed. 

![스크린샷 2023-09-18 오전 2 36 09](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/55d2111a-641c-41ef-9efa-522755885db4)

## Contact Me Section
The **Contact Me section** is a section that is displayed in a *form* for the users to input their personal information: *Name*, *Email Address*, *Type of enquiry*, and *Message*. 
![스크린샷 2023-09-18 오전 2 41 36](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/c673f1ec-221e-433f-8d5f-77b2f88a9a81)
Through the use of React library *Formik*, each of the user inputs are controlled with *require functioning* making the input fields mandatory for all information to be inserted. If the input fields are missing the user's information, a red *Required* is displayed as a notice, disabling the Submit button. Furthermore, there is also a required *minimum word count* of 25 words in the message field for the users to input.

![스크린샷 2023-09-18 오전 2 45 06](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/5f571191-3203-4927-9896-8139ac6bc565)

For the *Type of enquiry*, the users could choose options of *Personal enquiry*, *Further Information enquiry*, *Clarification*, and *Other*. 
![스크린샷 2023-09-18 오전 2 54 37](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/636428a9-7c84-4fd9-9b8d-39d1d8f51bc0)

As this portfolio is started as a Front-End Project, the *Back-End server side* API is not yet connected hence the *Submit* button is operated through a random function. If the value the random function yields is smaller than 0.1, it throws a new Error indicating that the information is not properly submitted. On the otherhand, with *state management*, a successful response is set. 
![스크린샷 2023-09-18 오전 3 26 50](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/a714ff88-17d3-4190-a29e-e2b73762c872)
![스크린샷 2023-09-18 오전 3 34 00](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/b50fd5ed-95fb-44fe-abdc-d03e0f0684aa)


## Installing and Running the Portfolio
### After downloading the source files in my GIT page, open the files in a React environment. 
### From the terminal, run:
# npm start
### and the portfolio will be displayed! 

![스크린샷 2023-09-18 오전 3 39 45](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/8caf694f-f693-4b2e-b2ca-dca1405da065)


![스크린샷 2023-09-18 오전 3 41 39](https://github.com/siwookim1114/Project-myportfolio/assets/63380176/ca15463c-f215-4683-897a-a98de2ce871b)




# Enjoy and feel free to contact me for Follow-Ups! 