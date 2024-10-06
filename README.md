# Just Travel Front

## Description

This project is a web application developed using React and TypeScript. It includes a header component, a login button, a cart component with item count, and additional styling with custom fonts and responsive design.

## Features

- **Search for Tickets by City**: Displays the available tickets.
- **Add Tickets on Cart**: Add one more Ticket to buy.
- **Cart Component**: Shows the number of items in the cart with a visual indicator.

## Playground

Check on `netlify`: https://just-trial.netlify.app/

## Run

`npm install && npm run dev`

## Tech Decisions

![image-problem](https://github.com/user-attachments/assets/593da14a-af1f-4fb3-98d8-c5efe1cd9cd1)
1. I never used next before. When I tried to put my first image, it was blank... I tried to use next Image tag and img, but nothing went well.

2. My next move is to discard next and use vite and react with typescript: which is this project.

3. I could use MaterialUI or Bootstrap or Chackra UI as I used on [a previous project](https://github.com/twygo-trial/twygo-select-front) 
to create responsive components. But as **Just Travel** provided me the style cheet definitions, I choosed to go with your style in pure css.

4. I had problems trying to align in the main grid content in the center.

5. I did not bind the graphql queries from server and for this reason I did not bind the states of the components as well. The result of search should pass the pagination results tickets to the main grid and the pagination info to the pagination component. We can handle the `schema_test` of backend to implement queries.

For eager load we can use useQuery
```jsx
// src/components/ExemploConsulta.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Defina sua consulta GraphQL
const OBTENHA_DADOS = gql`
  query {
    dados {
      id
      nome
      descricao
    }
  }
`;

const ExemploConsulta = () => {
  const { loading, error, data } = useQuery(OBTENHA_DADOS);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <h1>Dados</h1>
      <ul>
        {data.dados.map((item) => (
          <li key={item.id}>
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExemploConsulta;
```

For lazy load we can use
```jsx
// src/components/FetchOnClick.js
import React from 'react';
import { useLazyQuery, gql } from '@apollo/client';

// Define your GraphQL query
const GET_DATA = gql`
  query {
    dados {
      id
      nome
      descricao
    }
  }
`;

const FetchOnClick = () => {
  const [getData, { loading, data, error }] = useLazyQuery(GET_DATA);

  const handleClick = () => {
    getData(); // Call the function returned by useLazyQuery to execute the query
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      {data && (
        <ul>
          {data.dados.map((item) => (
            <li key={item.id}>
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchOnClick;
```

6. After that I should do the cart component (still not written) receive the results of listing with a useQuery. And add more tickets as we successfully request it to the backend without real need to refetch.

7. Then we can think about adding memoization to not rerender tickets loaded with the same id.

8. Make the pagination works fine was tricky, because of usability and resizing of buttons.
