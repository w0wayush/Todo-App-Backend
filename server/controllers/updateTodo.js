const Todo = require("../models/Todo")

exports.updateTodo = async(req, res) => {
      try{
            const {id} = req.params;
            const {title, description} = req.body;

            const todo = await Todo.findOneAndUpdate(
                  {_id:id},
                  {title, description, updatedAt: Date.now()}
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
                        message:`Updated ${id} data successfully`
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