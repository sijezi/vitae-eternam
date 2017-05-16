export function addUrn(urn) {
  const id = 'urn-'+Date.now();
  return {
    type: 'ADD_URN',
    urn,
    id
  }
}

export function removeUrn(key) {
  return {
    type: 'REMOVE_URN',
    key
  }
}

export function updateUrn(key, updatedUrn) {
  return {
    type: 'UPDATE_URN',
    key,
    updatedUrn
  }
}

export function setUser(name, email, photoURL, uid) {
  return {
    type: 'SET_USER',
    name,
    email, 
    photoURL, 
    uid
  }
}

export function setAdress(firstName, lastName, road, city, state, ZIP, phone) {
  return {
    type: 'SET_ADRESS',
    firstName,
    lastName,
    road,
    city,
    state,
    ZIP,
    phone
  }
}

export function removeUser() {
  return {
    type: 'REMOVE_USER',
  }
}


