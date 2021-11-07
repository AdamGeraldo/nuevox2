
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
        <strong>Anime</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Anime Online</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" class="btn btn-primary my-2">Ver lista de Anime</a>
          <a href="#" class="btn btn-secondary my-2">Agregar un Anime</a>
        </p>
      </div>
    </div>
  </section>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Anime</th>
      <th scope="col">Personaje</th>
      <th scope="col">Ver</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Naruto Shippuden</td>
      <td>Naruto Uzumaki</td>
      <td><button type="button" class="btn btn-info">Ver anime</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Dragon Ball</td>
      <td>Goku</td>
      <td><button type="button" class="btn btn-info">Ver anime</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >One piece</td>
      <td>Monkey D. Luffy</td>
      <td><button type="button" class="btn btn-info">Ver anime</button></td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default App;
