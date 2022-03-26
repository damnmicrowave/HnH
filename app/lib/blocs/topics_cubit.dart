import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/models/topics.dart';

class TopicsCubit extends Cubit<TopicsModel?> {
  TopicsCubit() : super(null);

  loadTopics() async {
    final TopicsModel topics = TopicsModel.fromJson(const {
      "objects": [
        {"id": "7563", "name": "Beatings"},
        {"id": "4563", "name": "Harassment"},
        {"id": "5967", "name": "Emotional abuse"},
        {"id": "4956", "name": "Lie"},
      ]
    });
    emit(topics);
  }
}
