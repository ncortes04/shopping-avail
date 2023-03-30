import authService from './auth'
export const register = async (formData) => {
          return await fetch(`/api/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
      };
 export const createPost = async (postData) => {
        return await fetch(`/api/createpost`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
          authorization: `Bearer ${authService.getToken()}`},
          body: JSON.stringify(postData)
      });
    };
export const getSingle = async () => {
         return fetch(`/api/me`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
          authorization: `Bearer ${authService.getToken()}`,
        },
      });
  }
  export const getRole = async () => {
          return fetch(`/api/getrole`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json',
          authorization: `Bearer ${authService.getToken()}`,
        },
      });
  }

export const login = async (formData) => {
        return await fetch(`/api/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  };

export const getPostData = async () => {
  return await fetch(`/api/getposts`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
  },
});
}
export const addPost = async (name) => {
  return await fetch(`/api/createcategory`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
    authorization: `Bearer ${authService.getToken()}`},
    body: JSON.stringify(name)
})
}
export const getCategories = async () => {
  return await fetch(`/api/getcategories`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
  },
})
}
export const getIndividual = async (id) => {
  return await fetch(`/api/single${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
  },
});
}