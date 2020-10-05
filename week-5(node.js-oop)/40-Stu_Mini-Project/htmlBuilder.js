function htmlBuilder(data) {
    const pageDisplay = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="./${data.nameAns}Style.css">
    </head>
    <body>
    
        <!-- main content, first paragraph wraps around the 'profile picture' -->
      <main class="container content-wrap">
        <section class="row  border-bottom">
          <article class="col-lg-12">
            <h1> ${data.nameAns} </h1>
          </article>
        </section>
        <section class="row">
          <article class="col-lg-12">
            <p>${data.locationAns}</p>
          </article>
        </section>
        <section class="row">
          <article class="col-lg-12">
            <p>${data.bioAns}
            </p>
            <p> <a href=${data.gitHubAns} target="_blank">GitHub</a> <br> 
              <a href=${data.linkedInAns} target="_blank">LinkedIn</a>
            </p>
          </article>
        </section>
      </main>
    
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
      integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"></script>
    </body>
    </html>`;

    return pageDisplay;
}

module.exports = {
    htmlBuilder : htmlBuilder
}