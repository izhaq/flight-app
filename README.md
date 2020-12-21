# flight-app

flight app is a simple app based angular latest version (11)

It consist of 3 main features:
1. Workers list.
2. flight list for a worker
3. flight information


## Installation


```bash
1. clone the repo.
2. run "npm install"

```

## Usage

```python
1. run "npm start" or "ng serve"(if you have angular-cli installed globally) - 
   will be available at localhost:4200
```

## Client Application Structure

As stated before the app consist of four main features: 
1. Workers list.
2. flight list for a worker
3. flight information

In addition, it uses following external libraries:
1. **Bootstrap** - for global styling
2. **ngrx** - for state management

In addition, following are the main folders structure:

**1. Store** 

   here are all the store(state management) related files.\
Usually, each feature will have its own "store slice" where each slice consist of four files:
 
   - **actions** - all type actions related to the feature - responsible for requesting the app to make an action. for example: fetching workers list
   - **reducers** - all reducers and selectors related to the feature - the only place where the store can be mutated(changed)
   - **effects** - all effects related to the feature - usually invoking an action will cause one of the two - state change via reducers or any async action done via an effect
   - **interfaces** - all interfaces related to the feature

   In addition, to reduce "imports" boilerplate from the main module there are 3 store main files which will contain all slices.

**2. components**

   Here are all the presentational/dumb components (they can be on a separate module or not - up to you to decide)

   Since all components here are "dump" they should not connect to the store but only via @Input/@Output

**3. containers**

 Here are all the smart components which will have connection to the store(via facades).\
    In addition, some containers can be on a separate module (aka feature module) with their own feature Store.     


**4. facades**

 this layer is based on the facade design pattern and it propose is to prevent.
 container components to be depend directly on the store.
This way it will be easier to upgrade/switch to a different state management library without the need to "touch" all containers as well.\
    In addition it makes the containers code look much cleaner.

**5. services**

   Since services are singletons in angular it is a good idea to place all reusable business logic and any helpers here. for example: service with all api endpoint requests, error massages, localization, etc..      


## License
[MIT](https://choosealicense.com/licenses/mit/)
