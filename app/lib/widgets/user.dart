import 'package:flutter/material.dart';
import 'package:hack_n_heal/models/user.dart';
import 'package:hack_n_heal/uikit/colors.dart';
import 'package:shared_preferences/shared_preferences.dart';

class User extends StatefulWidget {
  const User({Key? key}) : super(key: key);

  @override
  State<User> createState() => _UserState();
}

class _UserState extends State<User> {
  SharedPreferences? preferences;
  final userObjects = {"id": "3647473673464", "username": "xenikii"};

  @override
  void initState() {
    super.initState();
    _loadUser();
  }

  void _loadUser() async {
    setState(() {
      preferences?.setString(
          "username", UserModel.fromJson(userObjects).username);
    });
  }
  Future<void> initializePreference() async{
    this.preferences = await SharedPreferences.getInstance();
  }
  @override
  Widget build(BuildContext context) {
   // print(preferences);
    return DrawerHeader(
      child: UserAccountsDrawerHeader(
        margin: EdgeInsets.zero,
        decoration: BoxDecoration(
          gradient: LinearGradient(
              colors: [const AppColors().primaryColor(), Colors.indigo[400]!]),
        ),
        accountName: Text(preferences?.getString("username") ?? ''),
        accountEmail: const Text("shiza@hacknheal.aaaa"),
      ),
      padding: EdgeInsets.zero,
    );
  }
}
