import 'dart:convert';

import 'package:hack_n_heal/models/articles.dart';
import 'package:hack_n_heal/models/threads.dart';
import 'package:hack_n_heal/models/topics.dart';
import 'package:hack_n_heal/models/user.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class Api {
  Api();

  String baseUrl =
      'https://hack-n-heal-git-backend-damnmicrowave.vercel.app/api/';

  final client = http.Client();

  Future<bool> login(String email, String password) async {
    final uri = Uri.parse(baseUrl + 'auth/login');
    final response = await client.post(uri,
        body: json.encode({
          'data': {'email': email, 'password': password}
        }),
        headers: {'Content-Type': 'application/json'});
    final success = response.statusCode == 200;
    if (success) {
      String secret = json.decode(response.body)['object']['secret'];
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('secret', secret);
    }
    return success;
  }

  Future<bool> signup(String email, String password, String username) async {
    final uri = Uri.parse(baseUrl + 'auth/signup');
    final response = await client.post(uri,
        body: json.encode({
          'data': {'email': email, 'password': password, 'username': username}
        }),
        headers: {'Content-Type': 'application/json'});
    final success = response.statusCode == 200;
    if (success) {
      String secret = json.decode(response.body)['object']['secret'];
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('secret', secret);
    }
    return success;
  }

  Future<UserModel?> me() async {
    final prefs = await SharedPreferences.getInstance();
    String? secret = prefs.getString('secret');
    if (secret == null) return null;

    final uri = Uri.parse(baseUrl + 'auth/me');
    final response = await client.post(uri, body: {'secret': secret});
    final success = response.statusCode == 200;
    if (success) {
      final dataJson = json.decode(response.body);
      final user = UserModel.fromJson(dataJson['object']);
      return user;
    }
    return null;
  }

  Future<TopicsModel?> loadTopics() async {
    final uri = Uri.parse(baseUrl + 'community/topics');
    var response = await client.get(uri);
    final success = response.statusCode == 200;
    if (success) {
      final dataJson = json.decode(response.body);
      final topics = TopicsModel.fromJson(dataJson);
      return topics;
    }
    return null;
  }

  Future<ThreadsModel?> loadThreads(String topicId) async {
    final uri = Uri.parse(baseUrl + 'community/threads?topicId=$topicId');
    var response = await client.get(uri);
    final success = response.statusCode == 200;
    if (success) {
      final dataJson = json.decode(response.body);
      final threads = ThreadsModel.fromJson(dataJson);
      return threads;
    }
    return null;
  }

  Future<ArticlesModel?> loadArticles() async {
    final uri = Uri.parse(baseUrl + 'knowledge/articles');
    var response = await client.get(uri);
    final success = response.statusCode == 200;
    if (success) {
      final dataJson = json.decode(response.body);
      final articles = ArticlesModel.fromJson(dataJson);
      return articles;
    }
    return null;
  }

// Future<CommentsModel?> loadComments(String articleId) async {
//   final uri = Uri.parse(baseUrl + 'knowledge/comments?articleId=$articleId');
//   var response = await client.get(uri);
//   final success = response.statusCode == 200;
//   if (success) {
//     final dataJson = json.decode(response.body);
//     final comments = CommentsModel.fromJson(dataJson['object']);
//     return comments;
//   }
//   return null;
// }
}

final api = Api();
