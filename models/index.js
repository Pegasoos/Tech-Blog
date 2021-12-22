const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
User.hasMany(Post,{
    foreignKey: 'poster',
    onDelete:'CASCADE'
});
Post.belongsTo(User,{
    foreignKey:'poster'
});
User.hasMany(Post,{
    foreignKey:'poster_id',
    onDelete:'CASCADE'
});
Post.belongsTo(User, {
    foreignKey:'poster_id'
});
User.hasMany(Comment, {
    foreignKey:'commenter',
    onDelete:'CASCADE'
});
Comment.belongsTo(User, {
    foreignKey:'commenter'
});
Post.hasMany(Comment, {
    foreignKey:'post_id',
    onDelete:'CASCADE'
});
Comment.belongsTo(Post, {
    foreignKey:'post_id'
})
module.exports = { User,Post,Comment };