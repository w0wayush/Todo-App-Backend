const Todo = require("../models/Todo")

exports.deleteTodo = async(req, res) => {
      try{
            const {id} = req.params;
            const todo = await Todo.findOneAndDelete(
                  {_id:id}
            )

            if(!todo){
                  res.status(404).json({
                        success: false,
                        data: todo,
                        message: `No data for ${id}`,
                  })
            }
            res.status(200).json(
                  {
                        success:true,
                        data:todo,
                        message:'Deleted data successfully'
                  }
            )
      }
      catch(err) {
            console.error(err);
            res.status(500).json({
                  success: false,
                  data: "Internal server error",
                  message: err.message,
            })
      }
}