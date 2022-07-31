

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <h1>Deep Thought API</h1>
    <h3>Resource : TechStack</h3>
    <p>
      Deep Thought API is Restful API performs CRUD operations upon the resource
      TechStacks there in Deep Thought.
    </p>
    <table class="table table-striped">
      <thead>
        <th scope="col">route</th>
        <th scope="col">method</th>
        <th scope="col">function</th>
      </thead>
      <tbody>
        <tr>
          <td>/</td>
          <td>GET</td>
          <td>Home</td>
        </tr>
        <tr>
          <td>/api/techs</td>
          <td>GET</td>
          <td>Display all techstacks there in Deep thought</td>
        </tr>
        <tr>
          <td>/api/techs/:id</td>
          <td>GET</td>
          <td>Display details of specific techstack</td>
        </tr>
        <tr>
          <td>/api/techs/new</td>
          <td>GET</td>
          <td>Display a form to create a new techstack</td>
        </tr>
        <tr>
          <td>/api/techs</td>
          <td>POST</td>
          <td>Create a new techstack</td>
        </tr>
        <tr>
          <td>/api/techs/:id/edit</td>
          <td>GET</td>
          <td>Display an edit form to edit techstack</td>
        </tr>
        <tr>
          <td>/api/techs/:id</td>
          <td>PUT or PATCH</td>
          <td>Update a techstack</td>
        </tr>
        <tr>
          <td>/api/techs/:id</td>
          <td>DELETE</td>
          <td>Delete a techstack</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
