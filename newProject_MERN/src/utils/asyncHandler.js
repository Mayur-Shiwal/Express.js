// This asyncHandler function takes a requestHandler as an argument, which is expected to be an asynchronous function. 
// It returns another function that wraps the requestHandler. This wrapper function catches any errors that might occur 
// during the execution of the requestHandler and passes them to Express's next function to handle them within the error middleware.


const asyncHandler = (requestHandler)=>{(req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}

export {asyncHandler}







// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }