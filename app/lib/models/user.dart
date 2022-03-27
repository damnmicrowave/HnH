class UserModel {
  UserModel({
    required this.id,
    required this.username,
  });

  String id;
  String username;

  factory UserModel.fromJson(Map<String, dynamic> json) => UserModel(
    id: json["id"],
    username: json["username"],
  );
}
