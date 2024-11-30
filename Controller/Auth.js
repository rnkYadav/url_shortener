class Auth {
  authenticateUser = async function (req, res, next) {
    try {
      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
  verifyRequest = async function(req, res, next){
    try {
        // Logic to verify the request
        next ();
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
  }
}

module.exports = new Auth();
