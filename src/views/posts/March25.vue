<template>
  <div>
    <b-card title="Let's Get Ready To Rumble" sub-title="March 25, 2020" align="left">
      <br>
      <b-card-text>
          I’m not going to lie.  Getting this project to deploy has been an absolute pain in the ass.  To be fair,
          this was the very first time I ever deployed a VueJS project as simply static files.  I typically deploy a
          full blown application with a Django Backend and it usually has a front-end build via Django Template with a
          VueJS instance within it.  However, given the limited nature of the website, I figured I should deploy it as
          static pages (Thanks Ravi for the architectural advice).
      </b-card-text>
      <b-card-text>
        When it came to deploying the site, it was quite the headache.  My first goal was to deploy the site on Amazon
        Web Services.  However, I ran into a variety of issues with this.  Due to the use of Vue Routers and having the
        desire for this website to remain a Single Page Application, I ran into permissions issues when deploying the
        initial skeleton website to AWS S3.  I searched practically everywhere attempting to see what exactly was happening,
        but had zero luck resolving my issues.
      </b-card-text>
      <b-card-text>
        Finally, after a bit more research, I found a great solution.  Apparently one of the easiest ways to deploy static
        pages, particularly with Vue, is through Netlify.  This service connects with the Github repository your project
        lives within and can do an automatic build of the project.  Even better, every time you push your project to master,
        it will automatically deploy the new build of the application.  Lastly, configuring the domain was extremely easy and
        just took a bit of DNS reconfiguring in order for everything to deploy correct.  Finally, at a great time of 3:00AM,
        I had a successful deployment of the website, albeit with boilerplate code.
      </b-card-text>
      <b-card-text>
        Now the real fun begins: building the pages of the website so there is real content.  Stay tuned.
      </b-card-text>
      <b-card-text>
        Yet, growing a beard in isolation would be a really boring and uneventful adventure, so I figured I might as well
        share this journey with the world.  Hence the birth of this website.  It gives me an opportunity to hone my craft as a Software Developer and ultimately provide
        some laughs to people who are searching for some good in the world.
      </b-card-text>
      <b-card-text>
        <p>Stay Safe, </p>
        <p> </p>
        <p>Charlie</p>
      </b-card-text>
    </b-card>
  </div>
</template>

<style>

</style>
