const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      res.status(500).json(err);
    });
});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    
    res.status(500).json(err);
  }
});

// Login
router.post('/login', (req, res) => {
return  User.findOne({
      where: {
        email: req.body.email,
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({message: 'No user with that email address'});
        return res;
      }
      const validPassword = dbUserData.checkPassword(req.body.password);
      
      if (!validPassword) {
        res.status(400).json({message: 'Incorrect password!'});
        return res;
      }
     
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;
        req.session.save()
        res.header('Access-Control-Allow-Credentials', 'true');
       return res.json({ user: dbUserData, message: 'You are now logged in!'})
  
    }).catch(err => {
      
    });
 });

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).end();
  }
});



module.exports = router;
