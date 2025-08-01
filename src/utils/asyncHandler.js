// const asyncHandler = () => {}
// const asyncHandler = (fn) => {return () => {}}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () => {}
    
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

import { Promise } from "mongoose"

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise
        .resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}

// above methods duplicate
// const asyncHandler = (requestHandler) => (req, res, next) =>
//   Promise.resolve(requestHandler(req, res, next)).catch(next);


export {asyncHandler}


