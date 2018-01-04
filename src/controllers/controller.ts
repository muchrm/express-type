export class Controller {
    constructor(protected repository){
    }
    index(req, res, next){
        // return this.repository.all();
        res.json({"data":"kuy"})
    }
    show(req, res, next){
        return this.repository.find();
    }
    update(req, res, next){
        return this.repository.update();
    }
    destroy(req, res, next){
        return this.repository.delete();
    }
    store(req, res, next){
        return this.repository.create();
    }
}
