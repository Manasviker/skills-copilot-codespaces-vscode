function skillsMembers(){
    return{
        restrict:'E',
        tenplateUrl:'modules/skills/views/member.html',
        controller:"SkillsMemberController",
        controllerAs:'vm',
        bindToController:true,
        scope:{
            member:"m"
        }
    };
}
