## React Prototyper

### What is this?

* ease of setup. low entry barrier. ~5 minutes to get up and running
* demonstrate an opinionated approach to develop react app
* demonstrate the development of modular (and scalable) components
* contains case study to familiarize with real world workflow
* uses local parcel
* storybook via local webpack (also serves as a comparison between parcel)

* What's included?
  * bulma
  * ionicons
  * ant design
  * axios to demonstrate http request
  * react router
  * lint via `npm run lint` (using local `pretty-quick`)
  * run `pretty-quick` on precommit via husky (local)

### Installation

* `npm install`
* `npm start`

### Repo Structure

```js
# Structure Overview

▾ .storybook/
    [mostly unchanged]
▾ dist/
    *.js|map|png|html|ico
▾ src/
    ▾ components/
        ▾ layout/
            *.tsx
        *.tsx
    ▾ scenes/
        *.tsx
    ▾ styles/
        *.less|sass|css
    ▹ app.tsx
    ▹ routes.tsx
    ▹ stubs.tsx
▾ stories/
    ▹ index.tsx
▾ typings/
    *.d.ts
▹ index.html
```

* `.storybook/`  
  mostly unchanged; enough to get you up and running in most cases.

* `dist/`  
  it's safe to ignore this directory in your IDE

* `src/`
  This directory is where you'll spend the most of your time developing the code.

* `stories/`  
  Components you want to put in React Storybook. To make sure that your component is modular, only import components from `src/components` (not `src/scenes`) into storybook since those components are supposed to be stateless components.

* `typings/`  
  typescript typings files

* `index.html`  
  Infrequently changed. Mostly one-time setup.

### Highlights

* Why no `public` directory?

  it'll be put on build

* Why typescript over prop types?
* Why parceljs over webpack?
  * supported styles: css, ..
  * supported js files: js, jsx, ts, tsx

### Case Study

#### 1. Creating Dynamic Route

_WIP_

#### 2. Using React Storybook

_WIP_

#### 3. Deploying the Webapp

_WIP_

---

README checklist (from noffle/art-of-readme):

* [ ] One-liner explaining the purpose of the module
* [ ] Necessary background context & links
* [ ] Potentially unfamiliar terms link to informative sources
* [ ] Clear, _runnable_ example of usage
* [ ] Installation instructions
* [ ] Extensive API documentation
* [ ] Performs [cognitive funneling](https://github.com/noffle/art-of-readme#cognitive-funneling)
* [ ] Caveats and limitations mentioned up-front
* [ ] Doesn't rely on images to relay critical information
* [ ] License