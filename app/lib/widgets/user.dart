import 'package:flutter/material.dart';
import 'package:hack_n_heal/models/user.dart';
import 'package:hack_n_heal/uikit/colors.dart';


class User extends StatefulWidget {
  const User({Key? key}) : super(key: key);

  @override
  State<User> createState() => _UserState();
}

class _UserState extends State<User> {
  UserModel? user;

  // @override
  // void initState() {
  //   super.initState();
  //   setState(() async {
  //     user = await api.me();
  //   });
  // }

  @override
  Widget build(BuildContext context) {

    return DrawerHeader(
      child: UserAccountsDrawerHeader(
        margin: EdgeInsets.zero,
        decoration: BoxDecoration(
          gradient: LinearGradient(
              colors: [const AppColors().primaryColor(), Colors.indigo[400]!]),
        ),
        // accountName: Text(user?.username == null ? "" : user!.username),
        accountName: const Text('Kremon'),
        accountEmail: const Text("kremoor@gmail.com"),
      ),
      padding: EdgeInsets.zero,
    );
  }
}
