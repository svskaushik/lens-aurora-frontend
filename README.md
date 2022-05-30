# Lens Protocol Front End Starter

This is an example of how to build a front-end application on top of [Lens Protocol](https://docs.lens.xyz/docs).

The main queries used in this app are defined in __api.js__:

1. [recommendProfiles](https://docs.lens.xyz/docs/recommended-profiles#api-details) - get popular profiles

2. [getProfiles](https://docs.lens.xyz/docs/get-profiles) - get profiles by passing in an array of `profileIds`

3. [getPublications](https://docs.lens.xyz/docs/get-publications) - returns a list of publications based on your request query

4. [searchProfiles](https://docs.lens.xyz/docs/search-profiles-and-publications) - allows you to search across hashtags on publications or profile handles. This query returns either a Post and Comment or Profile.

You can view all of the APIs [here](https://docs.lens.xyz/docs/introduction)

## Running this project

You can run this project by following these steps:

1. Clone the repo, change into the directory, and install the dependencies

```sh
git clone git@github.com:dabit3/lens-protocol-frontend.git

cd lens-protocol-frontend

npm install

# or

yarn
```

2. Run the project

```sh
npm run dev
```

3. Open the project in your browser at [localhost:3000](http://localhost:3000/)