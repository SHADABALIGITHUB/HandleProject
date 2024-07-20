const router = require("express").Router();
const User  = require("../../models/user/user-model")

router.get('/:username', async (req, res) => {
    const username = req.params.username;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({user,success:true});
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
