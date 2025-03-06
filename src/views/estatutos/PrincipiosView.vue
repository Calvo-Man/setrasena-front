<script setup>
import BannerAfiliacion from '@/components/BannerAfiliacion.vue';
</script>
<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Nuestros Principios</h1>
    </div>
    <BannerAfiliacion/>
    <div class="card-body">
      <section class="section">
        <h2 class="section-title">Declaración de Principios</h2>
        <ol>
          <li>
            SETRASENA, como organización sindical de base, valora y reconoce el
            pluralismo político, la libertad de conciencia y la libre expresión,
            la libertad de culto, el libre desarrollo de la personalidad, la
            multiracialidad y multiculturalidad propia de nuestro país, las
            diferencias de género y sexualidad, como una fortaleza propia de las
            diferencias y contradicciones que científicamente contribuyen al
            crecimiento y desarrollo de las ideas para lograr una verdadera
            integralidad de la lucha sindical y la sociedad.
          </li>
          <li>
            SETRASENA, desarrollará la UNIDAD al interior de la organización,
            mediante la discusión organizada, el manejo científico de la
            contradicción, el respeto y la altura política, la creación de
            conciencia y la convicción, que nos permitan lograr una gran fuerza
            política e ideológica para desarrollar la participación en una aguda
            lucha política de las bases sindicales; de igual forma trabajaremos
            por construir la UNIDAD de la clase obrera colombiana, en una
            central única de trabajadores sindicalizados
          </li>
          <li>
            SETRASENA, como fruto de un acuerdo de trabajadores organizados,
            desarrollará todas sus actividades haciendo ejercicio de una amplia
            DEMOCRACIA, de carácter obrero, ejerciendo la Democracia directa, en
            la toma de decisiones, mediante asambleas, cabildos o consultas
            directas a las bases, con elecciones y revocatorias de mandatos en
            los casos que sea necesario, de acuerdo a los estatutos; la toma de
            decisiones será por mayorías estatutarias, se respetará el criterio
            de las minorías y se les permitirá seguir defendiendo sus ideas
            dentro de los parámetros estatutarios.
          </li>
          <li>
            LA SOLIDARIDAD, será una fortaleza fundamental de nuestra
            organización sindical SETRASENA, tanto al interior, como hacia otras
            organizaciones del proletariado, que se encuentren en lucha contra
            el capitalismo salvaje en cualquier país del mundo y en especial en
            nuestro país, bajo el parámetro que cualquier triunfo de los
            trabajadores, será un triunfo nuestro y cualquier derrota será
            también nuestra, por esta razón nos comprometemos a desarrollar a
            fondo y con firmeza este principio de hermandad de clase.
          </li>
          <li>
            SETRASENA, construirá los más amplios lazos a nivel mundial
            desarrollando el principio del INTERNACIONALISMO PROLETARIO, con
            todas las organizaciones obreras clasistas, populares, de
            trabajadores que se encuentren en contradicción con la explotación
            del trabajo, el despojo a los trabajadores, la expoliación del
            ambiente y los recursos naturales, las imposiciones del capital
            internacional y el imperialismo.
          </li>
          <li>
            La EDUCACIÓN sindical que desarrolle el estudio de los maestros del
            proletariado, que confluya en la formación que demandan los entornos
            laborales de nuestra sociedad desde los entornos económicos
            mundiales, maximizando el liderazgo propositivo , que nos permita
            conocer la realidad y las herramientas, métodos y medios para
            transformar los conflictos en oportunidades para fortalecer las
            justas condiciones laborales serán los parámetros educativos de
            SETRASENA, para contribuir al rescate de la clase obrera como clase
            para sí, que eleve el nivel de conciencia, sirva para fortalecer la
            organización y con ella elevar la lucha reivindicativa a lucha
            política, buscando y contribuyendo a la eliminación de la
            explotación y construir una sociedad humana por excelencia.
          </li>
          <li>
            SETRASENA, es una organización autónoma e independiente del estado,
            del patrón, de las iglesias, de los partidos políticos sea de
            derecha o izquierda, respetando siempre la libertad de opinión, con
            criterios clasistas de lucha por nuestras reivindicaciones como
            trabajadores y como pueblo.
          </li>
          <li>
            SETRASENA, ejercerá, desarrollara y defenderá el derecho universal a
            la organización, como una de las más valiosas expresiones de la
            democracia y la autodeterminación de los pueblos, en tal sentido
            confrontara todas las formas de exterminio del sindicalismo y de las
            organizaciones del proletariado, dentro de los parámetros de la
            defensa de los ratificados por Colombia de la OIT y la Constitución
            Colombiana.
          </li>
          <li>
            El valor de las mujeres en nuestra sociedad será promovido y
            reconocido por SETRASENA, en tal sentido valora y promueve la
            participación de las mujeres en nuestra organización y en el
            sindicalismo, por esta razón será sentado especialmente en nuestros
            estatutos.
          </li>
          <li>
            SETRASENA como sindicato clasista, desarrollará la más profunda
            lucha contra nuestros contradictores de clase, la oligarquía
            nacional, la burguesía internacional, por ser los generadores y
            beneficiarios de la explotación, la violencia, la guerra y la
            miseria de los pueblos del mundo, de Colombia, de la Privatización
            del SENA y la perdida de nuestros derechos laborales como
            trabajadores estatales al servicio del SENA
          </li>
        </ol>
      </section>
    </div>
    <h5 class="text-disabled mt-4 text-center">
      SETRASENA UN SINDICATO COMPROMETIDO EN LA LUCHA CONTRA LA CORRUPCION
      <br />
      Bogotá, Carrera 7 N°34-50
    </h5>
  </div>
</template>

<script>
import BannerAfiliacion from '@/components/BannerAfiliacion.vue';
export default {
  name: "PlataformaLuchaCard",
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



.section-title {
  font-size: 1.4em;
  margin-bottom: 10px;
}

ul,
ol {
  margin-left: 20px;
}

li {
  margin: 8px 0;
}
</style>
