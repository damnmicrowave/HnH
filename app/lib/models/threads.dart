import 'package:hack_n_heal/models/topics.dart';
import 'package:hack_n_heal/models/user.dart';

class ThreadsModel {
  ThreadsModel({
    required this.objects,
  });

  List<Thread> objects;

  factory ThreadsModel.fromJson(Map<String, dynamic> json) => ThreadsModel(
    objects: List<Thread>.from(json["objects"].map((x) => Thread.fromJson(x))),
  );
}

class Thread {
  Thread({
    required this.id,
    required this.name,
    required this.datetime,
    required this.topic,
    required this.author,
  });

  String id;
  String name;
  int datetime;
  Topic topic;
  UserModel author;

  factory Thread.fromJson(Map<String, dynamic> json) => Thread(
    id: json["id"],
    name: json["name"],
    datetime: json["datetime"],
    topic: Topic.fromJson(json["topic"]),
    author: UserModel.fromJson(json["author"]),
  );
}
