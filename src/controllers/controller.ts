export class Controller {
    protected repository
    index(){
        return this.repository.all();
    }
    show(id){
        return this.repository.find();
    }
    update(){
        return this.repository.update();
    }
    destroy(){
        return this.repository.delete();
    }
}