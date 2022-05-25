<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import DadJoke from './components/DadJoke.vue'
import MyCountry from './components/MyCountry.vue'

const helloResponse = ref('Empty String')

fetch('/api/hello-world')
  .then(response => response.json())
  .then(data => {
    console.log('THIS IS HERE!')
    console.log(data)
    helloResponse.value = data
  })
</script>

<template>
  <TheHeader />
  <main class="main">
    <h1>Edge Functions on Netlify</h1>
    <h2>{{ helloResponse }}</h2>
    <h3>Dad Joke Component</h3>
    <MyCountry />
    <Suspense>
      <DadJoke />
    </Suspense>
    <p>
      Explore a library of reference examples for learning about Edge Functions
      on Netlify.
    </p>
    <section>
      <h2>What are Edge Functions?</h2>
      <p>
        Using JavaScript and TypeScript,
        <a
          href="https://www.netlify.com/products/?utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Edge%20Functions%20Product%20Page#netlify-edge-functions"
          target="_blank"
          rel="noopener"
          >Netlify Edge Functions</a
        >
        give you the power to modify network requests to localize content, serve
        relevant ads, authenticate visitors, A/B test content, and much more!
        And this all happens at the <strong>Edge</strong> — directly from the
        worldwide location closest to each user.
      </p>
      <p>
        To use Edge Functions on Netlify, add JavaScript or TypeScript files to
        an edge-functions directory in your project, and add
        <code>[[edge_functions]]</code> entries to your netlify.toml file.
      </p>
      <p>
        <a
          href="https://docs.netlify.com/netlify-labs/experimental-features/edge-functions/?utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Edge%20Functions%20Docs"
          target="_blank"
          rel="noopener"
          >Learn more in the docs</a
        >.
      </p>
    </section>
    <section class="home__section">
      <h2>Examples</h2>
      <p>
        Explore the examples below, or over in the
        <a
          href="https://github.com/netlify/edge-functions-examples"
          target="_BLANK"
          rel="noopener"
          >GitHub repository</a
        >
        for this site.
      </p>
    </section>
    <section class="home__section">
      <h3 class="home__sectionHeader">Responses</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/hello"
            >Hello world</a
          >
        </li>
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/json"
            >Return JSON</a
          >
        </li>
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/image"
            >Return an image</a
          >
        </li>
      </ul>
    </section>
    <section class="home__section">
      <h3 class="home__sectionHeader">Rewrites and proxies</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/rewrite"
            >Rewrite responses from another URL</a
          >
        </li>
        <li class="home__sectionListItem home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/proxy-requests"
            >Proxy requests to another source</a
          >
        </li>
      </ul>
    </section>
    <section class="home__section">
      <h3 class="home__sectionHeader">HTTP Headers</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem">
          <a
            class="home__sectionListItemLink"
            href="/example/set-request-header"
            >Set custom HTTP request headers</a
          >
        </li>
        <li class="home__sectionListItem">
          <a
            class="home__sectionListItemLink"
            href="/example/set-response-header"
            >Set custom HTTP response headers</a
          >
        </li>
      </ul>
    </section>
    <section class="home__section">
      <h3 class="home__sectionHeader">Transforming responses</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/transform"
            >Text transformations</a
          >
        </li>
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/include"
            >Content includes</a
          >
        </li>
      </ul>
    </section>
    <section class="home__section">
      <h3 class="home__sectionHeader">Geolocation</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/geolocation"
            >Determine a user's location</a
          >
        </li>
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/country-block"
            >Block content according to country</a
          >
        </li>
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/localized-content"
            >Serve localized content</a
          >
        </li>
      </ul>
    </section>
    <section class="home__section">
      <h3 class="home__sectionHeader">Cookies</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/cookies-set"
            >Set cookies</a
          >
        </li>
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/cookies-read"
            >Read cookies</a
          >
        </li>
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/cookies-delete"
            >Delete cookies</a
          >
        </li>
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/abtest"
            >Set up an A/B test using cookies</a
          >
        </li>
      </ul>
    </section>
    <section class="home__section">
      <h3 class="home__sectionHeader">Environment and debugging</h3>
      <ul class="home__sectionList">
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/log"
            >Write to the logs</a
          >
        </li>
        <li class="home__sectionListItem">
          <a class="home__sectionListItemLink" href="/example/environment"
            >Use environment variables</a
          >
        </li>
      </ul>
    </section>
  </main>
</template>

<style>
:root {
  --color-bg: #ffffff;
  --color-fg: #151a1e;
  --color-gray-L300: #e7eaed;
  --color-gray-L800: #151a1e;
  --color-teal-T900: #054861;
  --color-teal-T600: #30c8c9;
  --color-blue-B500: #2250f4;
  --color-blue-B800: #112caf;
  --font-family-main: Mulish, sans-serif;
  --font-weight-normal: 300;
  --font-weight-bold: 900;
  --max-width-main: 800px;
  --box-shadow: 0 2px 4px rgb(14 30 37 / 12%);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  /* font-size: 100%; */
}

body {
  color: var(--color-fg);
  line-height: 1.5;
  font-family: var(--font-family-main);
  font-weight: var(--font-weight-normal);
  font-size: 19px;
  padding: 0;
  overflow-y: scroll;
}

.main {
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width-main);
  padding: 2rem;
}

a {
  color: currentColor;
}

a:focus {
  outline: transparent;
  outline-style: solid;
  border-radius: 0.125em;
  box-shadow: var(--color-bg) 0 0 0 0.125rem,
    var(--color-teal-T600) 0 0 0 0.375rem;
  transition: box-shadow 0.2s ease-in-out;
}

hr {
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-L300);
  border: none;
  margin-top: 4rem;
  margin-bottom: 4rem;
}

h1,
h2,
h3,
h4 {
  line-height: 1.3;
}

h1 {
  margin-bottom: 2rem;
  font-family: var(--font-family-main);
  font-weight: var(--font-weight-bold);
  font-size: 3rem;
}

h2 {
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-family-main);
  font-weight: var(--font-weight-bold);
  font-size: 2.2rem;
}

h3 {
  margin-bottom: 1.5rem;
  font-family: var(--font-family-main);
  font-weight: var(--font-weight-bold);
  font-size: 1.4rem;
}

h4,
h5,
h6 {
  margin-bottom: 1.5rem;
  font-family: var(--font-family-main);
  font-weight: var(--font-weight-bold);
  font-size: 1.4rem;
}

p {
  margin-bottom: 1.5rem;
  font-family: var(--font-family-main);
  font-weight: var(--font-weight-normal);
}

ol,
ul {
  margin: 2rem 1.5rem;
}

li {
  margin-bottom: 1rem;
  font-family: var(--font-family-main);
  font-weight: var(--font-weight-normal);
  /* font-size: 1.5rem; */
}

pre {
  color: var(--color-bg);
  background: #33373b;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

p code {
  background-color: var(--color-gray-L300);
  border-radius: 4px;
  padding: 0.2em 0.3em;
  font-size: 0.8em;
}

pre code {
  display: block;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 1em;
  padding: 1.25rem;
}

.hljs-cdata,
.hljs-comment,
.hljs-doctype,
.hljs-prolog {
  color: #a3a7ac;
}

.hljs-punctuation {
  color: #c5c8c6;
}

.namespace {
  opacity: 0.7;
}

.hljs-keyword,
.hljs-property,
.hljs-tag {
  color: #96cbfe;
}

.hljs-title.class_ {
  color: #ffffb6;
}

.hljs-boolean,
.hljs-constant {
  color: #9c9;
}

.hljs-symbol {
  color: #f92672;
}

.hljs-number {
  color: #ff73fd;
}

.hljs-attr-name,
.hljs-builtin,
.hljs-char,
.hljs-inserted,
.hljs-selector,
.hljs-string {
  color: #a8ff60;
}

.hljs-variable {
  color: #c6c5fe;
}

.hljs-operator {
  color: #ededed;
}

.hljs-entity {
  color: #ffffb6;
  cursor: help;
}

.hljs-url {
  color: #96cbfe;
}

.language-css .hljs-string,
.style .hljs-string {
  color: #87c38a;
}

.hljs-atrule,
.hljs-attr-value {
  color: #f9ee98;
}

.hljs-title.function_ {
  color: #dad085;
}

.hljs-regex {
  color: #e9c062;
}

.hljs-important {
  color: #fd971f;
}

.hljs-bold,
.hljs-important {
  font-weight: bold;
}

.hljs-italic {
  font-style: italic;
}

.hljs-prefix.deleted,
.hljs-prefix.inserted,
.hljs-prefix.unchanged {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hljs-table {
  background: 0 0;
  box-shadow: none;
  display: inline;
}

.header {
  max-width: var(--max-width-main);
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}

.header__logo {
  height: 4rem;
}

.header__logo svg {
  height: 100%;
}

.header__title {
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  text-align: left;
  color: var(--color-gray-L800);
  max-width: none;
}

.footer {
  margin-top: 5rem;
}

.footer__copyright {
  border-top: 1px solid var(--color-gray-L300);
  padding: 1.5em 0;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  text-align: center;
  color: var(--color-gray-L800);
  max-width: none;
  margin-bottom: 0;
}

.footer__source {
  padding: 1.5em 0;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  text-align: center;
  color: var(--color-gray-L800);
  max-width: none;
}

.geolocation {
  padding: 0;
  list-style: none;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  background-color: var(--color-bg);
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  border-radius: 0.625em;
  border: 1px solid var(--color-gray-L300);
}

.geolocation__flag {
  height: 2.5rem;
}

.geolocation__item {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin: 1rem;
}

.home__section {
  margin-bottom: 5rem;
}

.home__sectionHeader {
}

.home__sectionList {
  list-style: none;
  margin: 2rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.home__sectionListItem {
  box-shadow: var(--box-shadow);
  padding: 1.2rem;
  border-radius: 4px;
  border: 1px solid var(--color-gray-L300);
}

.home__sectionListItem--warning {
  outline: 4px solid red;
}

.home__sectionListItemLink {
  text-decoration: none;
  display: block;
}

.home__sectionListItemLink:hover {
  text-decoration: underline;
}

.protip {
  margin-top: 4rem;
  display: block;
  background-color: var(--color-bg);
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-gray-L300);
}

.protip h2 {
  margin-top: 0;
}

.cta-button {
  font-size: 1em;
  font-weight: 600;
  color: var(--color-gray-L300);
  border-radius: 6px;
  padding: 0.5em 1.5em;
  text-decoration: none;
  background-color: var(--color-blue-B500);
  transition: background 0.2s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a.cta-button:hover,
a.cta-button:focus {
  background-color: var(--color-blue-B800);
  color: #fff;
}
</style>
