export function resource(router,controller){
    router.route('/:id')
    .get((req, res, next)=>{
        return controller.show(req, res, next);
    })
    .put((req, res, next)=>{
        return controller.update(req, res, next);
    })
    .delete((req, res, next)=>{
        return controller.destroy(req, res, next);
    });

    router.route('/')
    .get((req, res, next)=>{
        return controller.index(req, res, next);
    })
    .post((req, res, next)=>{
        return controller.store(req, res, next);
    });
}
