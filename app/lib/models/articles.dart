import 'package:hack_n_heal/models/user.dart';

class ArticlesModel {
  ArticlesModel({
    required this.objects,
  });

  List<Article> objects;

  factory ArticlesModel.fromJson(Map<String, dynamic> json) => ArticlesModel(
    objects: List<Article>.from(json["objects"].map((x) => Article.fromJson(x))),
  );
}

class Article {
  Article({
    required this.id,
    required this.name,
    required this.datetime,
    required this.author,
    required this.content,
  });

  String id;
  String name;
  int datetime;
  UserModel author;
  String content;

  factory Article.fromJson(Map<String, dynamic> json) => Article(
    id: json["id"],
    name: json["name"],
    datetime: json["datetime"],
    author: UserModel.fromJson(json["author"]),
    content: json["content"],
  );
}