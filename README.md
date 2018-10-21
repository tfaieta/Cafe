![Pubber](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/700/055/datas/gallery.jpg)


##Inspiration
As computer scientists, we are being trained to push technology farther and harder every day, and the educational tools used to engrain these skills into us has also advanced with our capabilities. However, despite of all the innovations made to our educational and everyday lives, we often choose to rely on the book for our consumption of literature, despite the fact that eBooks promise a cheaper, easier, and more intuitive experience. But ask anybody and the fact is clear that eBooks aren’t at all easy to use despite their promises. In fact, they usually make reading such a pain that many students would rather lug around ten-pound textbooks instead.

Our mission was simply to make reading better. To take the stale and rigidly-formatted digital medium we’ve used for years, and transform it into a easy, clean, and personalized reading experience that tailors to individuals. We wanted to create an application that makes the reading medium a total afterthought to the words in front of you.

More over, in making it an Open Source project, we wanted to be ensure that we were creating an application that truly took public consideration and edition, with the ultimate goal of allowing more people to read and learn better than any generation has before.

What was the product of this mission? Pubber.

##What it does
Once we’d decided on developing Pubber, it didn’t take long for us to identify what the main culprit of countless hours of student frustration: PDFs. While exceptionally useful in terms of cross-system standardization and security options, it’s precisely these features that make text editing and legibility improvements impossible. The antithesis to this is EPUB, which an eBook file format whose content can be read and optimized across a plurality of devices and settings, but lacks many of the benefits a PDF would provide. Our solution: to create an application that takes PDF files and converts them to EPUB. In doing so, we would provide users with the highly optimizable reading experiences associated with EPUB files whilst also retaining PDF files' most useful tools, such as text-searching and highlighting. Combine all of that into a powerful, beautiful, yet simple design, and you have Pubber.

##How we built it
The front end was made in React and wrapped in an Electron wrapper so that it can live as a desktop app. The backend is make in Express and Node.js.

##Challenges we ran into
We ran into challenges when it came to the conversion of the PDF to the EPUB. Since PDF’s are locked objects, it is hard to access their inside elements and recreate them into another file format. The best we could do is find a parser that parsed through the PDF and recreated the body/image/meta as HTML, from then it was easier to convert to EPUB. The conversion is not 100% successful, we successfully implemented PDF to HTML to EPUB but when rendering the newly exported EPUB file seems to have some complications and causes it to not render. However, we may have built one of the most beautiful EPUB readers out there and I’m certain that with another day of work we could have fixed the rendering issue.

##What we learned
As only one of our team members was adept in Mac-application frontend, this project became an opportunity for the rest of our members to learn about React, the JavaScript library tool. In addition to this, we also learned about API creation and implementation, as well as the advantages and uses of Node environments and GitHub coordination tools.

Finally, keeping in-form with the rest of our project, we learned about the powerful benefits of teammate-to-teammate teaching. It not only proved to be an excellent means of disseminating concepts and information, but effective communication through teaching meant positive communication on every front as well, improving overall team productivity.

##What's next for Pubber
On the surface, Pubber presents a simple solution, yet it’s the solution to a problem that’s seemingly never been resolved before. For this reason, we’ll continue to improve the application, between our own input and those of contributors, to work towards that perfect EPUB reader we initially sought to create. It’s thanks to the advent of Open Source that this application truly has the potential to improve upon itself, not only with user-feedback, but with direct user-editing. Through this, we hope to determine what makes a literature application great, and what the industry will need to do to help digital literature accessibility catch up to our rapidly accelerating future.
