//import Todo model 
const Todo = require('../models/Todo')

//define route handler
exports.getTodo = async(req, res) => {
      try{
            const todo = await Todo.find({});
            res.status(200).json(
                  {
                        success:true,
                        data:todo,
                        message:'Fetched all data successfully'
                  }
            )
      }catch(err){
            console.error(err);
            res.status(500).json({
                  success: false,
                  error: "Internal server error",
                  message: err.message,
            })
      }
}


exports.getTodoById = async(req, res) => {
      try{
            const id = req.params.id;
            const todo = await Todo.findById({_id:id});
            if(!todo){
                  res.status(404).json(
                        {
                              success:false,
                              data:todo,
                              message:`No data for ${id}`,
                        }
                  )
            }
            res.status(200).json(
                  {
                        success:true,
                        data:todo,
                        message:`Fetched ${id} data successfully`
                  }
            )

      }catch(err){
            console.error(err);
            res.status(500).json({
                  success: false,
                  data: "Internal server error",
                  message: err.message,
            })
      }
}