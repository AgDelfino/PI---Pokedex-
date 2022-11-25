const { Router } = require('express');
const PokemonsRouter = require('./PokemonsRouter')
const TypesRouter = require('./TypesRouter')



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', PokemonsRouter)
router.use('/types', TypesRouter)

module.exports = router;
