import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/colors.dart';
import 'package:hack_n_heal/uikit/text.dart';

class UserBookmark extends StatefulWidget {
  const UserBookmark({Key? key, required this.username}) : super(key: key);

  final String username;

  @override
  State<UserBookmark> createState() => _UserBookmarkState();
}

class _UserBookmarkState extends State<UserBookmark> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: const AppText().tileSubtitleText("@" + widget.username),
      padding: EdgeInsets.all(5),
      decoration: BoxDecoration(
          color: AppColors().cardLabelColor(),
          borderRadius: BorderRadius.circular(5)),
    );
  }
}
