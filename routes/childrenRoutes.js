const express = require('express')
const router = express.Router();
const { childrenService } = require('../services')

router.get('/', async (req, res, next) => {
    try {
        let results = await childrenService.getAll();
        res.status(200).json({
            success: 1,
            data: results
        }).send();
    } catch (e) {
        console.log(e);
        res.sendStatus(500).send();
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let results = await childrenService.getById(req.params.id);

        if (results && results.length > 0) {
            res.status(200).json({
                success: 1,
                data: results[0]
            }).send();
        } else {
            res.status(404).json({
                success: 0,
                message: "Children was not found!"
            }).send();
        }

    } catch (e) {
        console.log(e);
        res.status(500);
    }
})

router.post('/', async (req, res, next) => {
    try {
        let results = await childrenService.add(req.body);
        res.status(201).json({
            success: 1,
            data: results
        }).send();
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        let results = await childrenService.update(req.body, req.params.id);
        res.status(201).json({
            success: 1,
            data: results
        }).send();
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        let results = await services.childrenService.delete(req.params.id);
        res.status(201).json({
            success: 1,
            data: results
        }).send();
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;