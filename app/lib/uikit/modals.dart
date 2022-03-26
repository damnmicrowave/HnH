import 'package:flutter/material.dart';

class AppModal extends StatefulWidget {
  const AppModal({Key? key}) : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return AppModalState();
  }

  void showUnderstandDialog(BuildContext context, title, content) {
    AlertDialog dialog = AlertDialog(
      title: Text(title),
      content: Text(content),
      actions: [
        ElevatedButton(
            child: const Text("Ok!"),
            onPressed: () {
              Navigator.of(context).pop();
            }),
      ],
    );
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return dialog;
        });
  }

}

class AppModalState extends State<AppModal> {
  String answer = "?";

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
