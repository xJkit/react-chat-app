// const Types = ['REQUEST', 'SUCCESS', 'FAILURE'];
// function createTypes(base) {
//   return Types.reduce((accu, type) => {
//     const ret = accu;
//     ret[type] = `${base}_${type}`;
//     return ret;
//   }, {});
// }

// export const SEND_NEW_MESSAGE = createTypes('SEND_NEW_MESSAGE');
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
