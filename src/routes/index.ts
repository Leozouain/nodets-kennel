import { Router } from "express";
import  * as PageConroller from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/', PageConroller.home)
router.get('/dogs', PageConroller.dogs)
router.get('/cats', PageConroller.cats)
router.get('/fishes', PageConroller.fishes)

router.get('/search', SearchController.search )





export default router