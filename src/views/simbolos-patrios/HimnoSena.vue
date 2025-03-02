<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Himno Estudiantil del SENA</h1>
    </div>
    <div class="card-body">
      <div class="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/LMKaOSB2N4Q"
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
            Estudiantes del SENA adelante<br />
            Por Colombia luchad con amor<br />
            Con el ánimo noble y radiante<br />
            Transformémosla en mundo mejor<br />
          </p>
        </section>

        <!-- Primera Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Primera Estrofa</h2>
          <p>
            De la patria el futuro destino,<br />
            en las manos del joven está,<br />
            el trabajo es seguro camino,<br />
            que el progreso a Colombia dará.<br />
          </p>
        </section>

        <!-- Segunda Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Segunda Estrofa</h2>
          <p>
            En la forja del SENA se forman,<br />
            hombres libres que anhelan triunfar,<br />
            con la ciencia y la técnica unidas,<br />
            nuevos rumbos de paz trazarán.<br />
          </p>
        </section>

        <!-- Tercera Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Tercera Estrofa</h2>
          <p>
            Hoy la patria nos grita sentida,<br />
            ¡estudiantes del SENA triunfad!<br />
            Solo así lograréis en la vida,<br />
            más justicia, mayor libertad.<br />
          </p>
        </section>

        <!-- Cuarta Estrofa -->
        <section class="col-12 col-md-6 col-lg-4 section">
          <h2 class="section-title">Cuarta Estrofa</h2>
          <p>
            Avancemos con fuerza guerrera,<br />
            ¡estudiantes con firme tesón!<br />
            Que la patria en nosotros espera,<br />
            su pacífica revolución.<br />
          </p>
        </section>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HimnoEstudiantilSENA',
};
</script>

<style scoped>
.card {
  width: 80%;
  margin: 20px auto;
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
