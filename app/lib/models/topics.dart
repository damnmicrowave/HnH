import 'package:equatable/equatable.dart';

class TopicsModel extends Equatable {
  const TopicsModel({
    required this.objects,
  });

  final List<Topic> objects;

  factory TopicsModel.fromJson(Map<String, dynamic> json) => TopicsModel(
        objects:
            List<Topic>.from(json["objects"].map((x) => Topic.fromJson(x))),
      );

  @override
  List<List<Topic>> get props => [objects];

  TopicsModel copyWith({List<Topic>? objects}) {
    return TopicsModel(objects: objects ?? this.objects);
  }
}

class Topic {
  Topic({
    required this.id,
    required this.name,
  });

  String id;
  String name;

  factory Topic.fromJson(Map<String, dynamic> json) => Topic(
        id: json["id"],
        name: json["name"],
      );
}
