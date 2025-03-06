<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Himno Internacional Socialista</h1>
    </div>
    <div class="card-body">
      <div class="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Aj8vctaO-oA"
          title="Himno Nacional de Colombia"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <div class="row">
        <!-- Coro -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Coro</h2>
          <p>
            Agrupémonos todos,<br />
            en la lucha final.<br />
            El género humano<br />
            es la internacional. (Bis)<br />
          </p>
        </section>

       
        <!-- Segunda Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Primera Estrofa</h2>
          <p>
            ¡Arriba, parias de la Tierra!<br />
            ¡En pie, famélica legión!<br />
            Atruena la razón en marcha:<br />
            es el fin de la opresión.<br />
          </p>
        </section>

        <!-- Tercera Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Segunda Estrofa</h2>
          <p>
            Del pasado hay que hacer añicos.<br />
            ¡Legión esclava en pie a vencer!<br />
            El mundo va a cambiar de base.<br />
            Los nada de hoy todo han de ser.<br />
          </p>
        </section>

        <!-- Cuarta Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Tercera Estrofa</h2>
          <p>
            Ni en dioses, reyes ni tribunos,<br />
            está el supremo salvador.<br />
            Nosotros mismos realicemos<br />
            el esfuerzo redentor.<br />
          </p>
        </section>

        <!-- Quinta Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Cuarta Estrofa</h2>
          <p>
            Para hacer que el tirano caiga<br />
            y el mundo esclavo liberar,<br />
            soplemos la potente fragua<br />
            que el hombre nuevo ha de forjar.<br />
          </p>
        </section>

        <!-- Sexta Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Quinta Estrofa</h2>
          <p>
            La ley nos burla y el Estado<br />
            oprime y sangra al productor;<br />
            nos da derechos irrisorios,<br />
            no hay deberes del señor.<br />
          </p>
        </section>

        <!-- Séptima Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Sexta Estrofa</h2>
          <p>
            Basta ya de tutela odiosa,<br />
            que la igualdad ley ha de ser:<br />
            "No más deberes sin derechos,<br />
            ningún derecho sin deber".<br />
          </p>
        </section>

      

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HimnoInternacionalTrabajadores',
};
</script>

<style scoped>
.card {
  width: 100%;

  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.card-header {
  background-color: var(--dark);
  color: white;
  padding: 15px;
  border-radius: 10px 10px 0 0;
}

.card-title {
  font-size: 1.8em;
  margin: 0;
}

.card-body {
  padding: 20px;
}

.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.4em;
  margin-bottom: 10px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-12 {
  width: 100%;
}

@media (min-width: 576px) {
  .col-md-6 {
    width: 50%;
  }
}

@media (min-width: 992px) {
  .col-lg-4 {
    width: 33.33%;
  }
}
</style>
