# Getting Started with React-Apiflow 
This repo is for getting started with React-Apiflow

## Installation 
please install the following packages:

```bash
npm install react-apiflow
```

## Usage 
### 1. Request API

The example code is as follows:
```javascript
import React from 'react';
import Apiflow, {ApiflowContext} from 'react-apiflow';

const Component = () => {

   // get API response from Apiflow
   const { response } = React.useContext(ApiflowContext);

    return (
      <>
        ...
        {/* call API with Apiflow and pass the API_ID*/}
        <Apiflow apiId="API_ID">
          <ul>
            {response?.data.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </Apiflow>
        {/* script to call API */}
        ...
      </>
    );
}

export default Component;
```
